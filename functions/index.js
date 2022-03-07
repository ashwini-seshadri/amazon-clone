//import functions from "firebase-functions";
//import express from "express";
//import cors from "cors";
//import { stripe, stripeAPI_Key } from "stripe";

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(stripeAPI_Key);
require("dotenv").config();

// API

// App Config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
   const total = request.query.total;

   console.log("Payment Request Recieved BOOM!! for this amount >>> ", total);

   const paymentIntent = await stripe.paymentIntents.create({
       amount: total, // sub-units of currency
       currency: "usd",
   });

// Created
   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   });
});

// listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-225eb/us-central1/api
