const test = require("tape");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POSTS_PATH = path.join(process.cwd(), "projects/");
const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

test("verify projects mdx", function (t) {
  postFilePaths.forEach((filePath, index) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    try {
      const { data } = matter(source);
      const requireFileds = [
        "title",
        "tag",
        "status",
        "date",
        "slug",
        "logo",
        "website",
      ];
      requireFileds.forEach((i) => {
        if (!data.hasOwnProperty(i)) {
          return t.fail(
            `This file which name is '${filePath}' ,is missing fields ${i}`
          );
        }
        if (i == "logo") {
          if (data.hasOwnProperty(i)) {
            const logoPath = path.join(process.cwd(), String(data.logo));
            fs.exists(logoPath, (exists) => {
              if (!exists) {
                return t.fail(
                  `This file '${filePath}' logo '${data.logo}',is not exist in folder 'img' `
                );
              }
            });
          }
        }
      });
      t.pass();
    } catch (error) {
      console.log(error);
      t.fail(error.message);
    }
  });
  t.end();
});
