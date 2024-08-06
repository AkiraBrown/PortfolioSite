function TestPage() {
  /*
    This is a list of tags that appear in the markdown converted html from the backend 
    h1
    p
    pre
    code
    ol
    li
    

    */
  return (
    <div className="font-mono col-span-4">
      <h1 className="font-bold text-lg text-center">
        Why fs is my favourite node module!
      </h1>
      <p className="p-4">
        In NodeJS there&#39;s a huge library of modules available to developers
        for all of your needs. In my experience, the fs module has been the king
        so far!
      </p>
      <p className="p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="logo"
        />
      </p>
      <p className="p-4">
        One of my favourite NodeJS modules is fs The fs module stands for
        &#39;file system&#39; and allows you to read, write, create and delete
        files in your system. This can be really helpful in backend systems
        especially when you want to manage a local store of data. In fact this
        repository actually uses the fs module to get all markdown files in a
        particular directory and use information about each file to populate a
        sql table with information about those markdown files.
      </p>
      <p className="p-4">
        In this function &quot;getDirectoryFiles&quot; we...
      </p>
      <ol>
        <li>Check if the repository is in Blogdb folder.</li>
        <li>Make the directory if it doesn&#39;t exist.</li>
        <li>
          Read the directory to get all the file names within the directory.
          These would be the markdown files that this blog is from.
        </li>
      </ol>
      <pre className="rounded bg-black">
        <code className="language-javascript">{`
const fs = require("fs");
const getDirectoryFiles = async () => {
  try {
    if (!fs.existsSync("./src/db/Blogdb")) {
      fs.mkdirSync("./src/db/Blogdb");
    }
    const fileArr = await fs.readdirSync("./src/db/Blogdb", {
      withFileType: false,
    });
    return fileArr;
  } catch (error) {
    return error;
  }
};`}</code>
      </pre>
      <p>
        Since we now have a function that can get us an array of all the files
        that are contained in the directory, I can proceed to use a fs function
        called &#39;stat&#39; to get back the creation date of each file.
      </p>
      <ol>
        <li>
          Recieve a fileName e.g <code>test.md</code> and pass it through
          fs&#39; stat function to get back <code>birthtimeMs</code>. This is
          the creation date of the file in milliseconds
        </li>
        <li>
          Convert the <code>birthtimeMs</code> into a Date so we can get store
          the information later in a human readable format.
        </li>
      </ol>
      <pre>
        <code className="language-javascript"></code>
      </pre>
      <p>
        Now we can bring all the information together so we can fill our sql
        database.
      </p>
      <ol>
        <li>
          <p>
            Assign a variable to the function call{" "}
            <code>getDirectoryFiles()</code> so we have an array of the file
            names in our target directory.
          </p>
        </li>
        <li>
          <p>
            Iterate through the array creating an object with the information to
            update the server.
          </p>
          <ul>
            <li>
              The <code>title</code> property is being assigned to a string that
              has the file extension removed since we&#39;ll be using the name
              of the file later for the frontend. The regex <code>/\..*/</code>{" "}
              removes everything after the &#39;.&#39; character.
            </li>
            <li>
              The <code>date_uploaded</code> get&#39;s the creation date of the
              file using the function <code>getCreationDate</code>.
            </li>
            <li>
              The <code>file_path</code> property is a direct path relative to
              the root of the backend directory.
            </li>
          </ul>
        </li>
        <li>
          <p>
            Query for all entries in the database to ensure that the information
            was added correctly and you&#39;re done.
          </p>
        </li>
      </ol>
      <pre>
        <code className="language-javascript">console.log("hello world");</code>
      </pre>
      <hr />
      <p>
        These are some of the very basic uses of the fs module, that you can use
        to implement features into your NodeJS environment. Some of the more
        advanced uses I&#39;ve also been able to enjoy is{" "}
        <code>fs.createReadStream</code> that enables you to stream file data
        from a NodeJS server to an endpoint. I was able to use this stream
        video, but it can be used to stream other file types.
      </p>
      <p>
        I really enjoy using <code>fs</code> because of how effective it can be
        at helping to serve data and store data where applicable in my NodeJS
        server and the module has been important in my learning of the
        capabilities of NodeJS.
      </p>
      <p>
        <a href="https://nodejs.org/api/fs.html">FS module</a>
      </p>
      <p>
        <a href="https://nodejs.org/docs/latest/api/">NodeJS Docs</a>
      </p>
    </div>
  );
}

export default TestPage;
