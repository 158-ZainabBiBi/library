echo "Compile CWIZTECH Locations Start"
git pull

echo "Update Changes"
git add .
echo "Git Added"
git commit -m "CWIZTECH User Management updated"
echo "Git Commit"
git push
echo "Git Updated"

echo "ng build command start"

ng build --prod --base-href ./

echo "Remove old files of CWIZTECH Locations"
rm -r /e/cwiztechproject/cwiztechwebapps/locations/*

echo "Copy new files of CWIZTECH Locations from locations to cwiztechproject/cwiztechwebapps/locations"
cp -r locations/* /e/cwiztechproject/cwiztechwebapps/locations

echo "Push work for Live Server"
cd /e/cwiztechproject/cwiztechwebapps
git pull

echo "Directory Changed"
git add .
echo "Git Added"
git commit -m "CWIZTECH Locations updated"
echo "Git Commit"
git push
echo "Git Updated"
