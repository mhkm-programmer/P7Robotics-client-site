import React from "react";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import PageTitle from "../../share/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div>
    <PageTitle title="P7Robotics|Blogs" />
      <Header></Header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/wRs2PDh/maxresdefault.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-12 h-12 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src="https://i.ibb.co/sVpnhQJ/1-change1.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    John Rahamix
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    What is an access token and refresh token? How do they work
                    and where should we store them on the client-side?
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h6 className="h6">Access Token:</h6>
                <p className="leading-relaxed text-lg mb-4">
                  An access token is a short-lived token that is issued to a
                  client (such as a web browser or mobile app) by an
                  authentication server after the user successfully logs in.
                  <br />
                  It serves as a credential that allows the client to access
                  protected resources on a server. <br />
                  Access tokens are typically encoded and digitally signed to
                  ensure their authenticity. They have a limited lifespan and
                  expire after a certain period of time (e.g., 1 hour). <br />
                  The client includes the access token in each request to the
                  server to authenticate itself and gain access to the protected
                  resources. <br />
                  <br />
                </p>
                <h6 className="h6">Refresh Token:</h6>
                <p className="leading-relaxed text-lg mb-4">
                  A refresh token is a long-lived token that is also issued to a
                  client by the authentication server during the login process.
                  <br />
                  When an access token expires, the client sends the refresh
                  token to the server to obtain a new access token, without
                  requiring the user to log in again.
                  <br />
                  <br />
                  <br />
                </p>
                <h5 className="h5">
                  Regarding storage on the client-side, it's important to follow
                  security best practices to protect access and refresh tokens:
                </h5>
                <h6 className="h6">Access tokens:</h6>
                <p className="leading-relaxed text-lg mb-4">
                  Access tokens are usually stored in the client-side memory or
                  local storage, as they are short-lived and need to be easily
                  accessible for making requests to protected resources.
                  <br />
                  However, storing access tokens in these locations poses some
                  security risks, such as being vulnerable to cross-site
                  scripting (XSS) attacks.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/nRjmcmt/sql-vs-nosql-comparision.webp"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-12 h-12 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src="https://i.ibb.co/gWHC3r2/images.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Alex Marcle
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Compare between SQL and NoSQL databases?
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h6 className="h6">SQL Databases:</h6>
                <p className="leading-relaxed text-lg mb-4">
                  Data Model: <br />
                  SQL databases use a structured data model with predefined
                  schemas, where data is organized into tables with rows and
                  columns. Each table represents a specific entity, and
                  relationships between tables are defined using foreign keys.
                  <br />
                  Query Language: <br />
                  SQL databases use the SQL language for defining and
                  manipulating data. SQL provides a standardized way to interact
                  with the database, allowing complex queries, joins, and
                  aggregations.
                  <br />
                  <br />
                  <br />
                  <h6 className="h6">NoSQL Databases:</h6>
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Data Model: <br />
                  Data Model: NoSQL databases use a variety of data models, such
                  as key-value, document, columnar, or graph-based. They provide
                  flexible schema designs, allowing dynamic and unstructured
                  data.
                  <br />
                  Query Language: <br />
                  NoSQL databases have different query languages depending on
                  the database type. Some NoSQL databases provide a query
                  language similar to SQL, while others use APIs, object-based
                  queries, or map-reduce functions.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/nn0dYLd/download-71.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-12 h-12 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                 <img src="https://i.ibb.co/Dk9Kqgz/images-1.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Express & Next JS
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    What is express js? What is Nest JS
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Express JS: <br />
                  Express.js is a fast and minimalist web application framework
                  for Node.js. It provides a simple and flexible way to build
                  web applications and APIs. Express.js is unopinionated,
                  allowing developers to have full control over the
                  application's structure and implementation. It provides a
                  range of features, including routing, middleware support,
                  template rendering, and HTTP utility methods, making it a
                  popular choice for building server-side applications with
                  Node.js.
                  <br />
                  Nest JS: <br />
                  NestJS is a progressive Node.js framework built with
                  TypeScript and heavily inspired by Angular. It is designed to
                  provide an efficient and scalable architecture for building
                  server-side applications. NestJS follows the principles of
                  modularity, reusability, and dependency injection, which make
                  it easy to develop and maintain complex applications.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/0sysZRf/Mongodb.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                 <img src="https://i.ibb.co/tqxqwCp/images-2.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Alia Maxi
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    What is MongoDB aggregate and how does it work
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  MongoDB's aggregate is a powerful aggregation framework that
                  allows you to perform advanced data processing operations on
                  your MongoDB collections. It provides a way to perform data
                  aggregation, transformation, filtering, grouping, and analysis
                  directly within the database. <br />
                  The aggregate framework works by processing data through a
                  pipeline of stages. Each stage performs a specific operation
                  on the data and passes the results to the next stage. The
                  stages are executed in order, allowing you to shape and
                  manipulate your data according to your requirements.
                  <br />
                  $match: Filters documents based on specified criteria. <br />
                  $group: Groups documents together based on a specified key and
                  performs aggregation functions on grouped data.
                  <br />
                  $sort: Sorts documents based on specified fields.
                  <br />
                  $project: Selects specific fields to include in the output and
                  shapes the structure of the resulting documents.
                  <br />
                  $limit and $skip: Control the number of documents to return
                  and skip within the result set, respectively.
                  <br />
                  $lookup: Performs a left outer join with another collection,
                  allowing you to combine data from multiple collections.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
