docker build -t amenic-site .
docker run -p 3000:3000 -d amenic-site
