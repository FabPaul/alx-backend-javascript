// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');

    const validLines = lines.filter((line) => line.trim() !== '');

    const fields = {};
    validLines.forEach((line) => {
      const field = line.split(',')[3];
      if (fields[field]) {
        fields[field].push(line.split(',')[0]);
      } else {
        fields[field] = [line.split(',')[0]];
      }
    });

    console.log(`Number of students: ${validLines.length}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
