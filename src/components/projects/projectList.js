const projectList = [
  {
    project_name: 'Prosféro',
    project_subname: 'A Web Application for transparent Crowd Funding',
    technologies: 'React.js, Node,js, MongoDB, Google OAuth, Paytm gateway',
    description: [
      'Created a Web Application for transparent transfer of funds from a donor to a needful',
      'Used React.js for making an interactive and easy to understand User Interface',
      'Used Node.js to create a backend server and MongoDB to store the user details and the transactions made to their cause.',
    ],
    link: 'https://www.google.com',
  },
  {
    project_name: 'whoami',
    project_subname:
      'An API that runs face recognition tests to sign in a user based on their webcam image',
    technologies: 'Node.js, Express.js, python face-recognition, MongoDB, AWS',
    description: [
      'Developed an API that recieves images taken from the webcam of user and runs facial recognition checks to log in / sign up the user',
      'Used the face-recognition module of python to run the recognition tests and return a json file as a reponse from the Node.js server',
      'Used MongoDB to store the images when the user signs up and read the images when user tries to log in',
    ],
    link: 'https://www.google.com',
  },
  {
    project_name: 'Voror',
    project_subname:
      'An application/brower extension that checks if a given link is a phishing link using Machine Learning model',
    technologies: 'Machine Learning, Sk-learn, Flask, Jinja',
    description: [
      'Used Machine Learning to detect if a given link is a phishing link',
      'Developed a model that runs check over 24 features extracted from the URL recieved and predicts if its a phishing link',
      'Used Flask to set up a server and run the model to return prediction to a frontend made using jinja templating engine',
    ],
    link: 'https://www.google.com',
  },
  {
    project_name: 'RL songs recommender',
    project_subname:
      'A reinforcement learning model that recommends you personalized songs based on the songs you listened to recently',
    technologies: 'Reinforcement Learning, Gym AI, Tensorflow',
    description: [
      'Takes advantage of reinforcement learning to predict user interests',
      'Takes in user input of like and dislike as a reward system',
      'Trained on a subset of the Million Songs dataset',
      'Used Gym AI to create an environment for the rl agent to function in and tensorflow for preprocessing of data and model training',
    ],
  },
  {
    project_name: 'OCR',
    project_subname:
      'A mobile application that recognizes code from an image, identifies the programming language and then creates a file with the code\n and appropriate file extension',
    technologies: 'Natural Language Processing, BERT, Tensorflow, openCV',
    description: [
      'Created a NLP model that takes advantage of the BERT model to recognize the programming language that the code was written in',
      'Trained the BERT model on the "GitHub snippets" database extensively',
      'Implemented an OCR with the help of tesseract-ocr that takes in an image preprocessed by scripts writting using openCV',
      'Developed a flutter application to support the backend model by capturing images and sending them to a backend server hosted on AWS',
    ],
  },
];

export default projectList;
