import os
import site
import sys <% if(virtualenv) { %>
if hasattr(sys, 'real_prefix'):
    site.addsitedir(os.path.join(os.path.dirname(__file__), 'lib'))
    gae_pth = '%s/lib/python2.7/site-packages/gae.pth' % os.environ.get('VIRTUAL_ENV')
    if not os.path.isfile(gae_pth):
        os.system('echo "<%= gcloud_path %>/platform/google_appengine" >> %s' % gae_pth)
        os.system('echo "import dev_appserver; dev_appserver.fix_sys_path()" >> %s' % gae_pth)
    try:
        import app
    except ImportError, err:
        print err
        if "No module named <%= filters['pyframework'] %>" in err:
            os.system('pip install -t lib -r requirements.txt')
        import app
    os.system('dev_appserver.py .')
else:
    print """
You are not in a python virtual envionment
Besure you have install virtualenvwrapper
and run 'workon <%= virtualenv_name  %>'
            """
<% } else { %>
import app
<% } %>

