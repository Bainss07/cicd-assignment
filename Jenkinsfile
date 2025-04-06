pipeline {
    agent any
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
    }
}