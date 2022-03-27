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

// fraction build issue bug fix
// source: https://danielbachhuber.com/2019/02/04/javascript-number-fraction/
export const numberToFraction = function (amount) {
  // This is a whole number and doesn't need modification.
  if (parseFloat(amount) === parseInt(amount)) {
    return amount;
  }
  // Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
  const gcd = function (a, b) {
    if (b < 0.0000001) {
      return a;
    }
    return gcd(b, Math.floor(a % b));
  };
  const len = amount.toString().length - 2;
  let denominator = Math.pow(10, len);
  let numerator = amount * denominator;
  var divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;
  let base = 0;
  // In a scenario like 3/2, convert to 1 1/2
  // by pulling out the base number and reducing the numerator.
  if (numerator > denominator) {
    base = Math.floor(numerator / denominator);
    numerator -= base * denominator;
  }
  amount = Math.floor(numerator) + '/' + Math.floor(denominator);
  if (base) {
    amount = base + ' ' + amount;
  }
  return amount;
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
