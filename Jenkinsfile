pipeline {
    agent { label 'localhost1' }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'cp .env.example .env'
                sh '/usr/local/bin/pm2 start ecosystem.config.js'
            }
        }
    }
}
