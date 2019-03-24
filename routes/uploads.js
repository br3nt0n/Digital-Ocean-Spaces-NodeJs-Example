const express = require('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const AWS = require('aws-sdk');

let space = new AWS.S3({
  //Get the endpoint from the DO website for your space
  endpoint: "sfo2.digitaloceanspaces.com",
  useAccelerateEndpoint: false,
  //Create a credential using DO Spaces API key (https://cloud.digitalocean.com/account/api/tokens)
  credentials: new AWS.Credentials("YOUR-KEY-ID-HERE", "YOUR-SECRET-HERE", null)
});

//Name of your bucket here
const BucketName = "YOUR-BUCKET-NAME-HERE";

/* Upload file */
router.post('/upload', upload.single('image'), function(req, res, next) {
  let uploadParameters = {
    Bucket: BucketName,
    ContentType: req.query.content_type,
    Body: req.file.buffer,
    ACL: req.query.acl,
    Key: req.query.file_name
  };

  space.upload(uploadParameters, function (error, data) {
    if (error){
      console.error(error);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});


/* Returns the uploaded file */
router.get('/:fileName', function (req, res, next) {
  let downloadParameters = {
    Bucket: BucketName,
    Key: req.params.fileName
  };

  space.getObject(downloadParameters, function(error, data) {
    if (error){
      console.error(error);
      res.sendStatus(500);
      return;
    }
    res.contentType(data.ContentType);
    res.end(data.Body, 'binary');
  });
});

module.exports = router;
