import React from "react";
import { useState } from "react";

const ShowLanguage = ({ binId }) => {
  const [language, setLanguage] = useState("");

  const displayLanguage = (e) => {
    setLanguage(e.target.textContent);
  };

  return (
    <div className='col-md-6 offset-md-3 mt-5 text-center'>
      <h3>Choose your language to get started.</h3>
      <ul class='nav justify-content-center'>
        <li class='nav-item'>
          <a class='nav-link' href='#' onClick={displayLanguage}>
            cURL
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#' onClick={displayLanguage}>
            Node.js
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#' onClick={displayLanguage}>
            Python
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link ' href='#' onClick={displayLanguage}>
            C#/.Net
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link ' href='#' onClick={displayLanguage}>
            Java
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link ' href='#' onClick={displayLanguage}>
            PHP
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link ' href='#' onClick={displayLanguage}>
            PowerShell
          </a>
        </li>
      </ul>

      <div id='languageDisplay'>
        <div
          className='card'
          style={{ display: language === "cURL" ? "block" : "none" }}
        >
          {" "}
          <div class='card-body bg-light'>
            <h5 class='card-title'>cURL</h5>

            <p className='card-text'>{`curl -X POST -d "fizz=buzz" https://binme.jtwgus.com/${binId}`}</p>
          </div>
        </div>

        <div
          class='card'
          style={{ display: language === "Node.js" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>Node.js</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`var request = require('request');
  var url ='https://binme.jtwgus.com/${binId}'
  request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
  });`}
                </code>
              </pre>
            </p>
          </div>
        </div>
        <div
          class='card'
          style={{ display: language === "Python" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>Python</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`import requests, time
r = requests.post('https://binme.jtwgus.com/${binId}', 
data={"ts":time.time()})
print r.status_code
print r.content`}
                </code>
              </pre>
            </p>
          </div>
        </div>
        <div
          class='card'
          style={{ display: language === "C#/.Net" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>C#/.Net</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace RequestBinExample
{
 class Program
 {
  static void Main(string[] args)
  {
   MakeRequest();
  }

  private static async Task MakeRequest()
  {
   var httpClient = new HttpClient();
   var response = await httpClient.GetAsync(new Uri("https://binme.jtwgus.com/${binId}"));
   var body = await response.Content.ReadAsStringAsync();
   Console.WriteLine(body);
  }
 }
}`}
                </code>
              </pre>
            </p>
          </div>
        </div>
        <div
          class='card'
          style={{ display: language === "Java" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>Java</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.*;
import org.apache.commons.httpclient.params.HttpMethodParams;

import java.io.*;

public class RequestBinTutorial {
 public static void main(String[] args) {
  HttpClient client = new HttpClient();
  GetMethod method = new GetMethod("https://binme.jtwgus.com/${binId}");
  try {
   int statusCode = client.executeMethod(method);
   byte[] responseBody = method.getResponseBody();
   System.out.println(new String(responseBody));
  } catch (Exception e) {
   System.err.println("Fatal error: " + e.getMessage());
   e.printStackTrace();
  } finally {
   method.releaseConnection();
  }
 }
}`}
                </code>
              </pre>
            </p>
          </div>
        </div>
        <div
          class='card'
          style={{ display: language === "PHP" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>PHP</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`<?php
    $result = file_get_contents('https://binme.jtwgus.com/${binId}');
    echo $result;
?>`}
                </code>
              </pre>
            </p>
          </div>
        </div>
        <div
          class='card'
          style={{ display: language === "PowerShell" ? "block" : "none" }}
        >
          <div class='card-body bg-light'>
            <h5 class='card-title'>PowerShell</h5>
            <p className='card-text'>
              <pre>
                <code>
                  {`powershell -NoLogo -Command "(New-Object System.Net.WebClient).DownloadFile('https://binme.jtwgus.com/${binId}', 'C:\\Windows\\Temp\\0qn20ix.txt')"`}
                </code>
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowLanguage;
