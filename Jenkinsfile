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
                ssh -o StrictHostKeyChecking=no -i /path/to/private-key.pem ec2-user@YOUR_EC2_PUBLIC_IP "

                rm -rf devops-task-manager

                git clone https://github.com/krishnaa-gupta/devops-task-manager.git

                cd devops-task-manager

                docker-compose down || true

                docker-compose up -d
                "
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}
