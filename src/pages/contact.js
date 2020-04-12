import React from 'react'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Title, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'
import { BulletedList, ListItem } from '../components/list'

const mailchimpFormHTML = `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
    #mc_embed_signup{background:#eeffff; clear:left; font:14px Helvetica,Arial,sans-serif; }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://renci.us3.list-manage.com/subscribe/post?u=c8914f488de27003a4fd3f676&amp;id=f47676c2a8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
    <label for="mce-FNAME">First Name  <span class="asterisk">*</span>
</label>
    <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
    <label for="mce-LNAME">Last Name  <span class="asterisk">*</span>
</label>
    <input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
</div>
<div class="mc-field-group">
    <label for="mce-MMERGE5">Organization  <span class="asterisk">*</span>
</label>
    <input type="text" value="" name="MMERGE5" class="required" id="mce-MMERGE5">
</div>
<div class="mc-field-group">
    <label for="mce-MMERGE6">Proposed Partnership Details  <span class="asterisk">*</span>
</label>
    <input type="text" value="" name="MMERGE6" class="required" id="mce-MMERGE6">
</div>
    <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c8914f488de27003a4fd3f676_f47676c2a8" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
`

const ContactPage = () => (
    <PageContent>
        <SEO 
            title="Contact"
            description=""
            keywords=""
        />
        <Title>Contact Us</Title>

        <Card>
            <CardHeader>Partnering with RENCI</CardHeader>
            <CardBody>
                <Paragraph>
                    Are you interested in partnering with RENCI to develop solutions to the coronavirus pandemic? In particular, RENCI can offer expertise in the following areas:
                </Paragraph>
                <BulletedList>
                    <ListItem primary="Data Management and Visualization" />
                    <ListItem primary="Data Analysis" />
                    <ListItem primary="AI / Machine Learning" />
                    <ListItem primary="Data-driven Biological Reasoning" />
                    <ListItem primary="Cloud Computing" />
                    <ListItem primary="Workflow Management" />
                    <ListItem primary="Use of Cloud Resources, High-Performance Clusters, or Distributed Resources" />
                    <ListItem primary="Cybersecurity" />
                </BulletedList>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>Tell us About Your Idea!</CardHeader>
            <CardBody>
                <div dangerouslySetInnerHTML={{ __html: mailchimpFormHTML }} />
            </CardBody>
        </Card>

    </PageContent>
)

export default ContactPage
