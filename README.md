# Movies App

_This project is developed using express with kuberenetes support._

## Steps

1. [Install Kubectl](https://kubernetes.io/docs/tasks/tools)
2. [Install Virtualbox](https://minikube.sigs.k8s.io/docs/start)
3. [Install Minikube](https://www.virtualbox.org/wiki/Downloads)
4. Start Minikube `minikube start --driver=virtualbox`
5. Check Minikube status`minikube status`
6. Open Minikube dashboard `minikube dashboard`
7. Build docker image `docker build -t akkuakhildev/kub-movies-api:v1 .`
8. Push docker image `docker push akkuakhildev/kub-movies-api:v1`
9. Start App `kubectl apply -f=deployment.yaml`
10. View App `minikube service movie-service `
11. Stop App `kubectl delete -f=deployment.yaml`

**Author: Akhildev MJ**
