

/* ------------------------------------------ Frequently Used CSS ------------------------------------------ */

/* Fonts - Note: Pulled from css variables*/

primary-font-xsmall
primary-font-small
primary-font-medium
primary-font-large
primary-font-xlarge

secondary-font-xsmall
secondary-font-small
secondary-font-medium
secondary-font-large
secondary-font-xlarge

light-font-xsmall
light-font-small
light-font-medium
light-font-large
light-font-xlarge

dark-font-xsmall
dark-font-small
dark-font-medium
dark-font-large
dark-font-xlarge

/* Background Colors - Note: Pulled from css variables*/

primary-color-bg /* backround fill using primary color */
secondary-color-bg
primary-base-color-bg
secondary-base-color-bg
alert-bg

/* Shadows - Note: Pulled from css variables*/

box-shadows
text-shadow

/* Gradients */

gradient

/* Layout */

inline


/* ------------------------------------------ Subdomain Link ---------------------------------------------- */

/{{config path="StoreInformation/additional_variables/subdomain"}}-

/* ------------------------------------------ Logo Variables ---------------------------------------------- */

<img src="/pub/media/ds2d/customize/image/{{config path='CustomizeSite/header/large_logo'}}" />
<img src="/pub/media/ds2d/customize/image/{{config path='CustomizeSite/header/small_logo'}}" />

/* ------------------------------------------ Store Information Variables --------------------------------- */

Store Information:

{{config path="StoreInformation/store_information/store_name"}}

{{config path="StoreInformation/store_information/address"}}

{{config path="StoreInformation/store_information/city"}}

{{config path="StoreInformation/store_information/region"}}

{{config path="StoreInformation/store_information/postcode"}}

{{config path="StoreInformation/store_information/phone"}}

{{config path="StoreInformation/store_information/tollfree"}}

{{config path="StoreInformation/store_information/fax"}}

{{config path="StoreInformation/store_information/public_email"}}

{{config path="StoreInformation/store_information/hours_of_operation"}}

Additional Variables:

{{config path="StoreInformation/additional_variables/subdomain"}}

{{config path="StoreInformation/additional_variables/intro"}}

{{config path="StoreInformation/additional_variables/description"}}

{{config path="StoreInformation/additional_variables/short_description_header"}}

{{config path="StoreInformation/additional_variables/short_description"}}

{{config path="StoreInformation/additional_variables/long_description_header"}}

{{config path="StoreInformation/additional_variables/long_description"}}

{{config path="StoreInformation/additional_variables/google_maps_embed_code"}}

Social Media:

{{config path="StoreInformation/social_media/google_my_business_link"}}

{{config path="StoreInformation/social_media/yelp_link"}}

{{config path="StoreInformation/social_media/twitter_link"}}

{{config path="StoreInformation/social_media/facebook_link"}}

{{config path="StoreInformation/social_media/youtube_link"}}

{{config path="StoreInformation/social_media/instagram_link"}}

{{config path="StoreInformation/social_media/pinterest_link"}}

{{config path="StoreInformation/social_media/tiktok_link"}}

Review Links:

{{config path="StoreInformation/review_links/google_review_link"}}

{{config path="StoreInformation/review_links/facebook_review_link"}}

{{config path="StoreInformation/review_links/yelp_review_link"}}

/* ------------------------------------------ Custom Page Variables ---------------------------------------- */

Custom Page Variables:

{{config path="custompages/general/weight_loss_page_content"}}

<img src="/pub/media{{config path="custompages/general/weight_loss_page_image_upload"}}/>

{{config path="custompages/general/compounding_page_content"}}

<img src="/pub/media{{config path='custompages/general/compounding_page_image_upload'}}"/>





/*CSS Cus*/
/*General Css*/
.semibold{font-weight:600 !important;}
.fit-cont{width:fit-content !important;}

.shadow{box-shadow: 14px 14px 50px 0px rgba(0, 0, 0, 0.10);}
.shadow2{box-shadow: 14px 14px 14px 0px rgba(0, 0, 0, 0.10);}

@media(max-width: 490px) {
 .fit-cont{margin:auto}
}
