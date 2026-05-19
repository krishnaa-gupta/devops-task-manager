pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/krishnaa-gupta/devops-task-manager.git'
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

        stage('Deploy To App Server') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no -i /var/lib/jenkins/.ssh/devops-key.pem ec2-user@3.108.190.192 "

                cd devops-task-manager

                git pull

                docker rm -f frontend backend || true

                docker build -t backend-app ./backend
                docker build -t frontend-app ./frontend

                docker run -d \
                --name backend \
                --network devops-task-manager_default \
                -p 5000:5000 \
                -e MONGO_URI=mongodb://mongodb:27017/taskdb \
                backend-app

                docker run -d \
                --name frontend \
                --network devops-task-manager_default \
                -p 3000:3000 \
                frontend-app
                "
                '''
            }
        }
    }
}
