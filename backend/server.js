const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Stripe demo key
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Firebase Admin demo (no private key needed for demo)
const admin = require('firebase-admin');
// admin.initializeApp({credential: admin.credential.applicationDefault()});

const workflows = require('./workflows/workflows.js');

app.post('/api/run_module', async (req, res) => {
    const { module, user_input } = req.body;
    let output = 'Module not found';
    if(workflows[module]){
        output = await workflows[module](user_input);
    }
    res.json({output});
});

// Stripe checkout demo endpoint
app.post('/api/create-checkout-session', async (req, res) => {
    res.json({url: 'https://buy.stripe.com/test_demo_placeholder'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Demo server running on port', PORT); });
