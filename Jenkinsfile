pipeline {
    agent {
        kubernetes {
            yaml """
                apiVersion: v1
                kind: Pod
                spec:
                  containers:
                  - name: kaniko
                    image: gcr.io/kaniko-project/executor:debug
                    command:
                    - /busybox/cat
                    tty: true
                    volumeMounts:
                    - name: docker-config
                      mountPath: /kaniko/.docker/config.json
                      subPath: .dockerconfigjson
                  volumes:
                  - name: docker-config
                    secret:
                      secretName: dockerhub-secret
            """
        }
    }

    environment {
        IMAGE_NAME = 'fabricio07/portfolio-fabricio'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Image') {
            steps {
                container('kaniko') {
                    sh """
                    /kaniko/executor \
                        --context \$(pwd) \
                        --dockerfile deploy/build_img/Dockerfile \
                        --destination \${IMAGE_NAME}:\${GIT_COMMIT} \
                        --destination \${IMAGE_NAME}:latest \
                        --snapshot-mode=redo \
                        --single-snapshot
                    """
                }
            }
        }
    }
}