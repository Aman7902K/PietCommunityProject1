const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Paths
const dataDir = path.join(__dirname, 'backend/data');
const uploadDir = path.join(__dirname, 'backend/uploads');

// Create folders if they don't exist
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// CORS
app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadDir));

// Multer config
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// JSON helper functions
const readJSON = (file) => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
};
const writeJSON = (file, data) => {
  fs.writeFileSync(path.join(dataDir, file), JSON.stringify(data, null, 2));
};

// === Routes ===

// Get all posts
app.get('/api/posts', (req, res) => {
  const posts = readJSON('posts.json');
  res.json(posts);
});

// Create post
app.post('/api/posts', upload.fields([
  { name: 'contentImg', maxCount: 1 },
  { name: 'profileImg', maxCount: 1 }
]), (req, res) => {
  const posts = readJSON('posts.json');

  const newPost = {
    id: Date.now(),
    name: req.body.name,
    position: req.body.position,
    department: req.body.department,
    content: req.body.content,
    contentImg: req.files.contentImg ? `/uploads/${req.files.contentImg[0].filename}` : null,
    profileImg: req.files.profileImg ? `/uploads/${req.files.profileImg[0].filename}` : null,
    liveLink: req.body.liveLink || '',
    status: req.body.status || '',
  };

  posts.unshift(newPost);
  writeJSON('posts.json', posts);

  res.json({ success: true, post: newPost });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  const projects = readJSON('projects.json');
  res.json(projects);
});

// Upload project
app.post('/api/projects', upload.single('image'), (req, res) => {
  try {
    const projects = readJSON('projects.json');

    console.log('Uploaded file:', req.file); // Debugging

    const newProject = {
      id: Date.now(),
      title: req.body.title,
      description: req.body.description,
      department: req.body.department,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      liveLink: req.body.liveLink || '',
      status: req.body.status || ''
    };

    projects.unshift(newProject);
    writeJSON('projects.json', projects);

    res.json({ success: true, project: newProject });
  } catch (error) {
    console.error('Error in project upload:', error);
    res.status(500).json({ message: 'Error uploading project', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
