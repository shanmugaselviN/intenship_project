pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
        // 2 minutes ku oru thadava GitHub la change check pannum
    }

    environment {
        APP_NAME = "Smart Farm Management System"
        IMAGE_NAME = "smart-farm"
        CONTAINER_NAME = "smart-farm-container"
    }

    stages {

        stage('Start') {
            steps {
                echo "Pipeline Started for ${APP_NAME}"
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/shanmugaselviN/intenship_project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing Node dependencies..."
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker run -d -p 3000:3000 --name %CONTAINER_NAME% %IMAGE_NAME%
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully & Docker container running!"
        }
        failure {
            echo "❌ Pipeline failed! Please check Jenkins logs."
        }
    }
}