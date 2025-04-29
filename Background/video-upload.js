#!/usr/bin/node
const fs = require('fs');
const tus = require('tus-js-client');
// Take the path to the video file as an argument, get info about it
const path = process.argv[2]
const file = fs.createReadStream(path);
const size = fs.statSync(path).size;
// Use this to store the video ID when we know it
let mediaId;
// Determine a date one month hence to automatically delete the video
const deletionDate = new Date();
deletionDate.setDate(deletionDate.getDate() + 31);
console.log(`Uploading ${path} (${size} bytes)`);
const options = {
  // Stream upload endpoint
  endpoint: 'https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_TAG/stream',
  headers: {
    // API token with Stream access
    Authorization: 'Bearer YOUR_API_TOKEN',
  },
  chunkSize: 50 * 1024 * 1024, // Chunk size of 50MB
  metadata: {
    name: path, // this will be the video's title in Stream's UI
    scheduleddeletion: deletionDate.toISOString(), // scheduled deletion date
  },
  uploadSize: size,
  onError: function (error) {
    throw error;
  },
  onAfterResponse: function (req, res) {
    // Capture the video id from the stream-media-id header and save it
    const mediaIdHeader = res.getHeader('stream-media-id');
    if (mediaIdHeader) {
      mediaId = mediaIdHeader;
    }
  },
  onSuccess: function () {
    // Report success to the local logs
    console.log(`Upload finished. Stream video id: ${mediaId}`);
    // Fire a webhook to Home Assistant with the link to the video
    const notification = fetch('http://home-assistant.server/api/webhook/video-uploader', {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        'message': 'Video Uploaded',
        // Stream player URL is https://customer-CODE.cloudflarestream.com/VIDEO_ID/iframe
        'link': `https://cloudflarestream.com/${mediaId}/iframe`,
      }),
    });
  },
};
const upload = new tus.Upload(file, options);
upload.start();
