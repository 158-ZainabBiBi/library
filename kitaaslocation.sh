echo "Compile KITAAS Locations Start"
git pull

echo "Update Changes"
git add .
echo "Git Added"
git commit -m "KITAAS User Management updated"
echo "Git Commit"
git push
echo "Git Updated"

echo "ng build command start"
ng build --prod --base-href ./

echo "Remove old files of KITAAS Locations"
rm -r /e/kitaasproject/kitaaswebapps/locations/*

echo "Copy new files of KITAAS Locations from locations to kitaasproject/kitaaswebapps/locations"
cp -r locations/* /e/kitaasproject/kitaaswebapps/locations

echo "Push work for Live Server"
cd /e/kitaasproject/kitaaswebapps
git pull

echo "Directory Changed"
git add .
echo "Git Added"
git commit -m "KITAAS Locations updated"
echo "Git Commit"
git push
echo "Git Updated"