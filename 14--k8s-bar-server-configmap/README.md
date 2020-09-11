# Kubernetes ConfigMap

This repo contains the `yaml` configurations developed to deploy a Deployment for the `Bar` server with `ConfigMap`s. Please find the `kubectl` commands used to deploy the configurations in the minikube environment below.

## Concepts

### ConfigMap

`ConfigMap` allows to decouple the configuration artifacts from image content. Which in result allows Kubernetes to make the containarized applications portable without needing to worry about the configurations.

In this sample, we have decoupled the `info.txt` artifact of the `Bar` serverr to a `ConfigMap` and mounted as a volume mount in the `Deployment` configurations.

> Please note that the volume mount specified in the `deployment.yaml` points to the `/usr/artifacts` directory. The `Bar` server uses this directory to copy the contents to the actual server directory. Therefore, the changes done to the `info.txt` will be reflected once the `Bar` pods are restarted.

## Kubectl Commands

### Apply

```sh
# deploy the namespace configurations
kubectl apply -f bar-server--namespace.yaml

# deploy the configmap configurations (required to deploy the configmap before deploying the pods)
kubectl apply -f bar-server--configmap.yaml

# deploy the deployment configurations
kubectl apply -f bar-server--deployment.yaml

# deploy the nodeport configurations
kubectl apply -f bar-server--deployment.yaml
```

### Restart

```sh
# once the configmap is updated it is required to apply the new configurations
kubectl apply -f bar-server--configmap.yaml

# then we have to restart the pods to take effect on the changes
# scale the deployment to restart the pods
kubectl scale deployment bar-service-deployment --replicas=0 -n bar-nspace
kubectl scale deployment bar-service-deployment --replicas=1 -n bar-nspace

# if you are in latest versions of kubernetes
kubectl -n bar-nspace rollout restart deployment bar-service-deployment
```

### Delete

```sh
# single delete command to bring down the deployment referred by the namespace
kubectl delete -f bar-server--namespace.yaml
```
