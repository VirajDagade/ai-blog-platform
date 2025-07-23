import multer from "multer";

// This tells Multer to store uploaded files on disk (your local filesystem).
const upload = multer({ storage: multer.diskStorage({}) });

export default upload;

/*  The Flow:

Frontend sends image using multipart/form-data (e.g., via <form> or FormData).

Multer handles that form-data and puts the uploaded file in req.file.

You read that file (e.g., using fs.readFileSync(req.file.path)).

Then you upload that file to ImageKit (via .upload({ file: buffer })).

*/
