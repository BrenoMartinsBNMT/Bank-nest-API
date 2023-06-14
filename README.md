<h1>Bank Nest API</h1>

<p>Bank Nest API is a RESTful API for managing banking operations, including accounts, transactions, and customer information.</p>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2>Introduction</h2>

<p>Bank Nest API is a backend application designed to provide banking functionalities through a RESTful API. It allows users to create and manage bank accounts, perform transactions, retrieve customer information, and more.</p>

<h2>Features</h2>

<ul>
  <li>User authentication and authorization</li>
  <li>Account creation, retrieval, and management</li>
  <li>Transaction handling, including deposits, withdrawals, and transfers</li>
  <li>Customer information management</li>
</ul>

<h2>Technologies</h2>

<ul>
  <li><a href="https://nestjs.com">NestJS</a>: A progressive Node.js framework for building scalable and efficient server-side applications.</li>
  <li><a href="https://www.typescriptlang.org">TypeScript</a>: A strongly typed superset of JavaScript that compiles to plain JavaScript.</li>
  <li><a href="https://www.mongodb.com">MongoDB</a>: A NoSQL database for storing data.</li>
  <li><a href="https://mongoosejs.com">Mongoose</a>: An Object Data Modeling (ODM) library for MongoDB and Node.js.</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone the repository:</li>
</ol>

<pre><code>git clone https://github.com/BrenoMartinsBNMT/Bank-nest-API.git
</code></pre>

<ol start="2">
  <li>Install the dependencies:</li>
</ol>

<pre><code>cd Bank-nest-API
npm install
</code></pre>

<ol start="3">
  <li>Set up the environment variables:</li>
  <ul>
    <li>Rename the <code>.env.example</code> file to <code>.env</code>.</li>
    <li>Update the <code>.env</code> file with your specific configuration values.</li>
  </ul>
</ol>

<ol start="4">
  <li>Start the application:</li>
</ol>

<pre><code>npm start
</code></pre>

<p>The application will be running at <code>http://localhost:3000</code>.</p>

<h2>Usage</h2>

<p>Make sure the application is running locally or deployed to a server. You can use tools like <a href="https://www.postman.com">Postman</a> or <a href="https://curl.se">curl</a> to interact with the API endpoints.</p>

<h2>API Endpoints</h2>

<p>The API provides the following endpoints:</p>


<p>For detailed information on request and response payloads for each endpoint, please refer to the API documentation.</p>

<h2>Contributing</h2>

<p>Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request. Please make sure to follow the contributing guidelines outlined in the repository.</p>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<p>Feel free to use this template as a starting point and customize it according to your project's needs. Remember to keep your README up to date and provide clear instructions for users to use and contribute to your project.</p>
