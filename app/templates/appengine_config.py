"""appengine_config.py gets loaded when starting a new application instance."""
import site
import os.path
# add `lib` subdirectory as a site packages directory, so our `main` module can load
# third-party libraries.
site.addsitedir(os.path.join(os.path.dirname(__file__), 'lib'))
