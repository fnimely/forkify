import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config.js';

// contains functions that are reused

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          // info about the request
          headers: {
            // what kind of data we are sending
            'Content-Type': 'application/json',
          },
          // request payload - data we want to send
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err; // propagate the err to model.js by rethrowing it
  }
};

/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    //   fetch(`${url}/${id}`)
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err; // propagate the err to model.js by rethrowing it
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      // info about the request
      headers: {
        // what kind of data we are sending
        'Content-Type': 'application/json',
      },
      // request payload - data we want to send
      body: JSON.stringify(uploadData),
    });
    //   fetch(`${url}/${id}`)
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err; // propagate the err to model.js by rethrowing it
  }
};
*/
