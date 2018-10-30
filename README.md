# Author
* Kelvin TKW
* TienPing


# RnWithNav
1. to initialise ur project, global search for RNWithNav and replace with your project name.
2. `react-native init <project_name>` to initialise a reactNative project
3. copy `android` and `ios` folder from inside folder and put in root folder generated (folder name match with your project name)

# STARTING APP
1. open terminal (commad + J)
2. yarn install (install node_modules)
3. yarn start (run Metro Bundler)
4. yarn android / ios (install app)

#CREATE A NEW PAGE
1. open terminal
2. yarn generate
3. Select the screen
    * Containers (State Component)
        - Logic
    * Components (Stateless Component)
        - Display
4. Select the type
    * Stateless Function
        - just a function
    * React.PureComponent
        - with all setup
5. Write a name for screen
6. Do you want an actions/constants/selectors/reducer tuple for this container?
    - YES
7. Do you want sagas for asynchronous flows? (e.g. fetching data)
    - YES
8. Do you want i18n messages
    - NO (for multilangue support)
9. DONE! The new page auto generate into the folder.

# FAQ