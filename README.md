# Welcome to your Expo app 👋

## Create a new app :

```bash
npx create-expo-app -t github:TardigradeX-1111/rn-starter-template MyNewAppName
```

## OR clone and rename (Copy this code and paste in terminal) :

**It will create a Project folder -> cd into it and then create the files there**

```bash

git clone https://github.com/TardigradeX-1111/rn-starter-template.git netflix_clone
cd netflix_clone
if [ -f rename-starter.sh ]; then
  chmod +x rename-starter.sh
  ./rename-starter.sh netflix_clone
else
  OLD="mobile_movie_app"
  NEW="netflix_clone"
  grep -RIl --exclude-dir=node_modules "$OLD" . | xargs -I{} sed -i '' "s/$OLD/$NEW/g" {} || true

  # Update package.json and app.json safely
  node -e "const fs=require('fs'); const p='package.json'; if(fs.existsSync(p)){const j=JSON.parse(fs.readFileSync(p,'utf8')); j.name='$NEW'; if(j.displayName) j.displayName='$NEW'; fs.writeFileSync(p, JSON.stringify(j,null,2)); console.log('package.json updated'); } const a='app.json'; if(fs.existsSync(a)){const ap=JSON.parse(fs.readFileSync(a,'utf8')); if(ap.expo){ap.expo.name='$NEW'; ap.expo.slug='$NEW'} fs.writeFileSync(a, JSON.stringify(ap,null,2)); console.log('app.json updated'); }"
fi

# 3. Install dependencies and start
npm install
npx expo start
```

---

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
