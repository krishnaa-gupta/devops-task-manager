pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/krishnaa-gupta/devops-task-manager.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t backend-app ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t frontend-app ./frontend'
            }
        }
    }
}
