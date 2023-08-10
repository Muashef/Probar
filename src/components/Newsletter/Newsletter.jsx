import React from 'react';
import wArrow from '../../assets/svg/wArrow.svg'
import '../Newsletter/newsletter.css';

const Newsletter = () => {
  return (
    <div className='w-full h-full px-6 md:px-14 py-10 lg:py-20 bg-[#FBF6E4]'>
      <div className='flex flex-col items-center justify-center mx-auto w-[300px] md:w-[615px]'>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css">
            {`
              #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
              /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                 We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
            `}
          </style>
          <div className='flex flex-col items-center justify-center mx-auto w-[300px] md:w-[615px]'>
                <h4 className='text-[#474A4D] text-center text-base mb-2 md:text-xl leading-6 md:leading-7'>
                Subscribe to our newsletter for the latest updates, exclusive content, and valuable insights. Stay informed and be part of our community. Don't miss out—join us today!
                </h4>
            <div id="mc_embed_signup" className='flex flex-col items-center justify-center w-full'>
                <form
                action="https://community.us18.list-manage.com/subscribe/post?u=22612707c43a05c184980b80c&amp;id=5515135bc9&amp;f_id=00ea91e6f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate bg-none w-[300px] md:w-[515px]"
                target="_blank"
                >
                <div id="mc_embed_signup_scroll">
                    {/* <h2>Subscribe</h2> */}
                    <div className="indicates-required">
                    </div>
                    <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL" className='text-base text-[#474A4D]'>Email Address <span className="asterisk">*</span></label>
                    <input
                        type="email"
                        name="EMAIL"
                        className="required email bg-white border border-[#888C91] text-black-900 text-sm block w-48 md:w-80 px-2 py-4 lg:p-4 outline-none rounded-none" 
                        id="mce-EMAIL"
                        required
                        // value=""
                    />
                    <span id="mce-EMAIL-HELPERTEXT"></span>
                    </div>
                    <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_22612707c43a05c184980b80c_5515135bc9" tabIndex="-1" value="" />
                    </div>
                    <div className="optionalParent">
                    <div className="clear foot">
                        <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button bg-lilly text-white p-4"
                        value="Subscribe Now"
                        />
                        <p style={{ margin: '0px auto' }}>
                        <a href="http://eepurl.com/iw-yJQ" title="Mailchimp - email marketing made easy and fun">
                            <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                            <img
                                className="refferal_badge"
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                alt="Intuit Mailchimp"
                                style={{
                                width: '220px',
                                height: '40px',
                                display: 'flex',
                                padding: '2px 0px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            />
                            </span>
                        </a>
                        </p>
                    </div>
                    </div>
                </div>
                </form>
            </div>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
          <script type="text/javascript">
            {`
              (function($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0] = 'EMAIL';
                ftypes[0] = 'email';
                fnames[1] = 'FNAME';
                ftypes[1] = 'text';
                fnames[2] = 'LNAME';
                ftypes[2] = 'text';
                fnames[3] = 'ADDRESS';
                ftypes[3] = 'address';
                fnames[4] = 'PHONE';
                ftypes[4] = 'phone';
                fnames[5] = 'BIRTHDAY';
                ftypes[5] = 'birthday';
              })(jQuery);
              var $mcj = jQuery.noConflict(true);
            `}
          </script>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;