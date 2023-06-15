<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# CSCI 5709 - Tutorial 4

* *Date Created*: 14 June 2023
* *Last Modification Date*: 14 Jun 2023


* *Deployed Netlify Application URL*: https://alen-john-t3.netlify.app/

* *Tutorials & Assignments Private GitLab URL (Entire Repository)*: https://git.cs.dal.ca/alen/csci-5709-individual-b00930528-alen-john

* *Tutorial 3 link to directory from individual repo (csci-5709-individual-b00930528-alen-john/tutorial/tutorial3):* https://git.cs.dal.ca/alen/csci-5709-individual-b00930528-alen-john/-/tree/main/tutorial/tutorial3

## Authors

* Alen John (al283652@dal.ca) (B00930528) - Developer

## Deployment 

### `git clone <repo_name>`

This clones the repository from GitLab to GitHub. create a repository on GitHub/Bitbucket/GitLab (gitlab.com).
This step is essential to deploy to netlify.

### `git push <new_repo_name>`

This pushes the code to the newly created repository. Using this repository this app can be deployed to netlify. This app is currently deployed at https://alen-john-t3.netlify.app/.

## Local Testing 


### `git clone <repo_name>`

This clones the repository from GitLab to the local machine.

### `npm install`
After navigating to the directory of the cloned project, Run this command to install all dependencies.

### `npm start`
Run the app using this command and navigate to http://localhost:3000.

## Built With

* [Node.js](https://nodejs.org/en/docs) - The JavaScript backend
* [React.js](https://react.dev/learn) - The JavaScript frontend
* [Netlify](https://docs.netlify.com/) - The Deployment enviroment
* [NPX](https://docs.npmjs.com/cli/v7/commands/npx) - Node Package Execute, used to generate react app (npx create-react-app <app-name>)
* [Mui](https://mui.com/material-ui/getting-started/overview/) - Material UI components for all the ui components
* [React-router-dom](https://reactrouter.com/en/main) - React router for the routing between pages


## Sources Used

1) For creating the regular expressions required for validations i used : https://regexr.com/
2) Learnt about how to avoid auto-refreshing of the page upon submission of form : https://www.robinwieruch.de/react-preventdefault/

### navbar.jsx

*Lines 11 - 34*

```
<AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Vogmanic
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>

```

The code above was created by adapting the code in [MUI-Navbar](https://mui.com/material-ui/react-app-bar/) as shown below: 

```
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

```

- <!---How---> The code in [MUI-Navbar](https://mui.com/material-ui/react-app-bar/) was implemented by... material UI to render responsive navbars
- <!---Why---> [MUI-Navbar](https://mui.com/material-ui/react-app-bar/)'s Code was used because... to achieve standard look and feel throughout the application. Material UI provides various readymade ui components for react. Developers can build on this for their application
- <!---How---> [MUI-Navbar](https://mui.com/material-ui/react-app-bar/)'s Code was modified by... adding 'sx' that is modifiying padding, fonts, structure according to this application. I also changed the color to my design to improve the UI for my app


### Form.jsx

*Lines 150 - 158*

```
<TextField label="Last Name" variant="outlined" fullWidth margin="normal"
                            value={lastName}
                            helperText={lastNameError} error={Boolean(lastNameError)}
                            onBlur={() => {
                                if (lastName.trim() === '') {
                                    setLastNameError('Last name cannot be empty');
                                }
                            }}
                            onChange={(e) => setLastName(e.target.value)} />

```

The code above was created by adapting the code in [Stack overflow](https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component) as shown below: 

```
  render() {
    return (
      <div>
        <form
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div className="col-md-6">
            <fieldset>
              <input
                ref="name"
                type="text"
                size="30"
                placeholder="Name"
                onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
              <input
                refs="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <input
                refs="phone"
                type="text"
                size="30"
                placeholder="Phone"
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
              />
              <br />
              <input
                refs="address"
                type="text"
                size="30"
                placeholder="Address"
                onChange={this.handleChange.bind(this, "address")}
                value={this.state.fields["address"]}
              />
              <br />
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

React.render(<Test />, document.getElementById("container"));

```

- <!---How---> The code in [Stackoverflow](https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component) was implemented by... Boky, explaining how can we use onchange hook for validation 
- <!---Why---> [Stackoverflow](https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component)'s Code was used because... to understand how to store each change in the state to keep track of the validation.
- <!---How---> [Stackoverflow](https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component)'s Code was modified by... using my own implementation of the explained method, by keeping the validation check in a seperate function and maintaining the state and changing when required. state is mainitained by "const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');". I also created error states for the fields and used them to keep track of the validation errors.



## Acknowledgments
* Prof. Mosquera and all the TAs.
* Netlify
* CSCI5709 course material from Brightspace
* Stackoverflow
* GitHub
* Gitlab
* React
* Node
