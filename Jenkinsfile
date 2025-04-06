pipeline {
    agent any
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-api-token')
        NETLIFY_SITE_ID = '8eb80bd1-aa28-4619-98d9-66047f72e6e0' 
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the React app...'
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test -- --passWithNoTests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to Netlify...'
                bat 'npm install -g netlify-cli'
                bat '"C:\\Users\\saman\\AppData\\Roaming\\npm\\netlify.cmd" deploy --prod --dir=build'
            }
        }
    }
}