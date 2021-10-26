const projectList = [
    {
        project_name : "Prosféro",
        project_subname : "A Web Application for transparent Crowd Funding",
        technologies: "React.js, Node,js, MongoDB, Google OAuth, Paytm gateway",
        description : [
            "Created a Web Application for transparent transfer of funds from a donor to a needful",
            "Used React.js for making an interactive and easy to understand User Interface",
            "Used Node.js to create a backend server and MongoDB to store the user details and the transactions made to their cause."
        ],
        link : "https://www.google.com",
    },
    {
        project_name : "Authentication using Face Recognition",
        project_subname : "An API that runs face recognition tests to sign in a user based on their webcam image",
        technologies : "Node.js, Express.js, python face-recognition, MongoDB, AWS",
        description : [
            "Developed an API that recieves images taken from the webcam of user and runs facial recognition checks to log in / sign up the user",
            "Used the face-recognition module of python to run the recognition tests and return a json file as a reponse from the Node.js server",
            "Used MongoDB to store the images when the user signs up and read the images when user tries to log in"
        ],
        link : "https://www.google.com",
    },
    {
        project_name : "Dont Phish",
        project_subname : "An application/brower extension that checks if a given link is a phishing link using Machine Learning",
        technologies : "Machine Learning, Sk-learn, Flask, Jinja",
        description : [
            "Used Machine Learning to detect if a given link is a phishing link",
            "Developed a model that runs check over 24 features extracted from the URL recieved and predicts if its a phishing link",
            "Used Flask to set up a server and run the model to return prediction to a frontend made using jinja templating engine"
        ],
        link : "https://www.google.com",
    },
]

export default projectList;