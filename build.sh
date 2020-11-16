iconLocation=$(pwd)/media/AppIcon.icns
echo Is this the right path to the icon? 
echo $iconLocation
read -p '(y/n) ' keepGoing
if [ $keepGoing == y ]
then
    echo Building...
    electron-packager . --icon "$iconLocation" --overwrite
fi

if [ $keepGoing != y ]
then
    if [ $keepGoing == n ]
    then
        echo Cancelling...
    fi
    if [ $keepGoing != n ]
    then
        echo Could not understand the input
    fi
fi