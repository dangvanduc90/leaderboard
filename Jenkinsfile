pipeline {
    agent { label 'localhost1' }

    stages {
        stage('Build') {
            steps {
                git branch: "main", url: 'https://github.com/dangvanduc90/leaderboard.git'
                sh 'npm install'
                sh 'cp .env.example .env'
                sh '/usr/local/bin/pm2 start ecosystem.config.js'
            }
        }
    }
}
