
import React from 'react';
import Header from '../../share/Header/Header';
import Footer from '../../share/Footer/Footer';
import PageTitle from '../../share/PageTitle/PageTitle';

const Terms = () => {
    return (
        <div>
        <PageTitle title="P7Robotics|Terms & Condition" />
        <Header/>
        <div className='container mx-auto pb-24 pt-10 px-16'>
          <h2 className='text-center text-green-500 h2 pb-8' >Terms and Condition</h2>
          <p>
          Welcome to P7ROBOTICS! By using our website, you agree to the following terms and conditions:
          </p> <br /><br />
          <p>
          Content: All content on our website, including but not limited to recipes, images, videos, and articles, is protected by copyright and may not be reproduced or distributed without our written permission.me.
          </p> <br /><br />
          <p>
          Accuracy: We make every effort to ensure the accuracy and completeness of our content, but we make no guarantees or warranties as to its accuracy or suitability for any particular purpose.
          </p> <br /><br />
         
          <p>
          Liability: We are not liable for any damages or losses that may result from your use of our website, including but not limited to direct, indirect, consequential, or incidental damages.
          </p> <br /><br />
          <p>
          User-generated content: Any content that you post or upload to our website, including comments, reviews, and ratings, must be your original work and must not infringe on any third-party rights. We reserve the right to remove any content that we deem inappropriate or offensive.
          </p> <br /><br />
          <p>
          Privacy: We take your privacy seriously and will not share your personal information with third parties without your consent. Please see our Privacy Policy for more information.
          </p> <br /><br />
          <p>
          Changes: We reserve the right to update or modify these terms and conditions at any time, without prior notice. By continuing to use our website, you agree to be bound by the updated terms and conditions.
          </p> <br /><br />
          <p>
          If you have any questions or concerns about these terms and conditions, please contact us at support@P7ROBOTICS.com. Thank you for using P7ROBOTICS!"
          </p> <br /><br />
         
        </div>
        <Footer/>
      
      </div>
    );
};

export default Terms;