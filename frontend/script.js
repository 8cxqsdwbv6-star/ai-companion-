// Firebase demo config (preconfigured)
const firebaseConfig = {
  apiKey: "demoAPIKey",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "demoSenderId",
  appId: "demoAppId"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login(){ alert('Demo login successful'); document.getElementById('modules').style.display='block'; }
function signup(){ alert('Demo signup successful'); document.getElementById('modules').style.display='block'; }

function launchModule(module){
  document.getElementById('output').innerText = module + ' module is launching...';
  fetch('https://ai-companion-m7od.onrender.com/api/run_module', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({module: module, user_input: 'example'})
  })
  .then(res => res.json())
  .then(data => { document.getElementById('output').innerText = data.output; });
}
