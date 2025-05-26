git pull
git tag -d $(git tag) && git fetch --tags


latest_release=$(git describe --tags `git rev-list --tags --max-count=1`)
echo "latest release : $latest_release"

git checkout $latest_release

rm -rf node_modules
npm i
npm run build

sudo systemctl restart nginx

echo "Deployment finished"