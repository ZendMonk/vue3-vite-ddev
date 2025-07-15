# vue3-vite-ddev

Meant as a minimal, ready-to-use template for rapidly bootstrapping Vue 3 applications using [Vite](https://vitejs.dev/) inside a [DDEV](https://ddev.com/) containerized development environment.

Feel free to use as a playground for Vue development, or as a starting point for your next Vue project.

### Version Information
- **Node.js**: 22.x
- **Vue**: 3.5.x
- **Vite**: 7.0.x
- **@vitejs/plugin-vue**: 6.0.x

## Initial Setup

This setup assumes you have the latest version of DDEV installed on your local machine. If you don't have DDEV installed, please refer to the [DDEV documentation](https://ddev.readthedocs.io/en/stable/) for installation instructions.

1. Clone the repository to your local machine, providing a fitting name for your new project. Otherwise, the repo's default name will be used.
```
git clone git@github.com:ZendMonk/vue3-vite-ddev.git <project name>
```
2. Adjust the project name in the `.ddev/config.yaml` file. (optional)
2. Run `ddev start` to start the DDEV environment
3. Run `ddev project-setup` to initially set up the project.
4. Enjoy! 🚀

## Development

While working on your Vue app, it's highly recommended to serve the frontend via the Vite development server. That way, you can take advantage of Vite's Hot Module Replacement feature, which allows you to see changes reflected in real-time without needing to rebuild the project.

To do so, simply run `ddev vue-dev`, then leave the terminal running in the background.

<b>Once the Vite server's running, you should be able to access your Vue app at</b>

http://`<project name>`.ddev.site:5173/<br/>
https://`<project name>`.ddev.site:5174/

Please note: The `<project name>` here refers to the project name specified in your `.ddev/config.yaml` file. By default, it'll be `vue3-vite-ddev`.

## Building for Production

To build the Vue app for production, just run `ddev vue-build`. This will compile the frontend code and place the output in the `public` directory.

<b>Once the build is complete, you can review your latest changes at</b>

https://`<project name>`.ddev.site
