import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogDetailsPageContent() {
  return (
    <SitePageTemplate
      route="blog-details.html"
      stylesheets={[
        "/assets/css/vendor/bootstrap.min.css",
        "/assets/css/vendor/animate.min.css",
        "/assets/css/plugins/swiper.min.css",
        "/assets/css/plugins/nice-select.css",
        "/assets/css/plugins/flatpickr.min.css",
        "/assets/css/plugins/nouislider.min.css",
        "/assets/css/vendor/magnific-popup.css",
        "/assets/css/vendor/odometer.min.css",
        "/assets/css/vendor/spacing.css",
        "/assets/css/vendor/remixicon.css",
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blog-details.css",
      ]}
    >
      <main>
        <BreadcrumbAreaSection />
        <PostboxAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Blog Details"
      description="Position your agency bridge between a client’s big picture"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="rs-postbox-area section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-7">
            <div className="rs-postbox-details-wrapper">
              <div className="rs-post-meta">
                <ul>
                  <li>
                    <span className="rs-meta">
                      <span className="rs-meta-thumb">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                        />
                      </span>
                      <span className="rs-meta-content">
                        {
                          "\n                                                By\n                                                "
                        }
                        <SiteLink
                          href="/contact-us.html"
                          className="meta-author"
                        >
                          {"Icfc"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335ZM4.66781 9.66683C4.58114 9.66683 4.49447 9.64683 4.41447 9.6135C4.32781 9.58016 4.26114 9.5335 4.19447 9.4735C4.07447 9.34683 4.00114 9.18016 4.00114 9.00016C4.00114 8.9135 4.02114 8.82683 4.05447 8.74683C4.08781 8.66683 4.13447 8.5935 4.19447 8.52683C4.26114 8.46683 4.32781 8.42016 4.41447 8.38683C4.65447 8.28683 4.95447 8.34016 5.14114 8.52683C5.26114 8.6535 5.33447 8.82683 5.33447 9.00016C5.33447 9.04016 5.32781 9.08683 5.32114 9.1335C5.31447 9.1735 5.30114 9.2135 5.28114 9.2535C5.26781 9.2935 5.24781 9.3335 5.22114 9.3735C5.20114 9.40683 5.16781 9.44016 5.14114 9.4735C5.01447 9.5935 4.84114 9.66683 4.66781 9.66683ZM7.00114 9.66683C6.91447 9.66683 6.82781 9.64683 6.74781 9.6135C6.66114 9.58016 6.59447 9.5335 6.52781 9.4735C6.40781 9.34683 6.33447 9.18016 6.33447 9.00016C6.33447 8.9135 6.35447 8.82683 6.38781 8.74683C6.42114 8.66683 6.46781 8.5935 6.52781 8.52683C6.59447 8.46683 6.66114 8.42016 6.74781 8.38683C6.98781 8.28016 7.28781 8.34016 7.47447 8.52683C7.59447 8.6535 7.66781 8.82683 7.66781 9.00016C7.66781 9.04016 7.66114 9.08683 7.65447 9.1335C7.64781 9.1735 7.63447 9.2135 7.61447 9.2535C7.60114 9.2935 7.58114 9.3335 7.55447 9.3735C7.53447 9.40683 7.50114 9.44016 7.47447 9.4735C7.34781 9.5935 7.17447 9.66683 7.00114 9.66683ZM9.33447 9.66683C9.24781 9.66683 9.16114 9.64683 9.08114 9.6135C8.99447 9.58016 8.92781 9.5335 8.86114 9.4735L8.78114 9.3735C8.75589 9.33635 8.73571 9.29599 8.72114 9.2535C8.70188 9.21572 8.6884 9.17527 8.68114 9.1335C8.67447 9.08683 8.66781 9.04016 8.66781 9.00016C8.66781 8.82683 8.74114 8.6535 8.86114 8.52683C8.92781 8.46683 8.99447 8.42016 9.08114 8.38683C9.32781 8.28016 9.62114 8.34016 9.80781 8.52683C9.92781 8.6535 10.0011 8.82683 10.0011 9.00016C10.0011 9.04016 9.99447 9.08683 9.98781 9.1335C9.98114 9.1735 9.96781 9.2135 9.94781 9.2535C9.93447 9.2935 9.91447 9.3335 9.88781 9.3735C9.86781 9.40683 9.83447 9.44016 9.80781 9.4735C9.68114 9.5935 9.50781 9.66683 9.33447 9.66683ZM4.66781 12.0002C4.58114 12.0002 4.49447 11.9802 4.41447 11.9468C4.33447 11.9135 4.26114 11.8668 4.19447 11.8068C4.07447 11.6802 4.00114 11.5068 4.00114 11.3335C4.00114 11.2468 4.02114 11.1602 4.05447 11.0802C4.08781 10.9935 4.13447 10.9202 4.19447 10.8602C4.44114 10.6135 4.89447 10.6135 5.14114 10.8602C5.26114 10.9868 5.33447 11.1602 5.33447 11.3335C5.33447 11.5068 5.26114 11.6802 5.14114 11.8068C5.01447 11.9268 4.84114 12.0002 4.66781 12.0002ZM7.00114 12.0002C6.82781 12.0002 6.65447 11.9268 6.52781 11.8068C6.40781 11.6802 6.33447 11.5068 6.33447 11.3335C6.33447 11.2468 6.35447 11.1602 6.38781 11.0802C6.42114 10.9935 6.46781 10.9202 6.52781 10.8602C6.77447 10.6135 7.22781 10.6135 7.47447 10.8602C7.53447 10.9202 7.58114 10.9935 7.61447 11.0802C7.64781 11.1602 7.66781 11.2468 7.66781 11.3335C7.66781 11.5068 7.59447 11.6802 7.47447 11.8068C7.34781 11.9268 7.17447 12.0002 7.00114 12.0002ZM9.33447 12.0002C9.16114 12.0002 8.98781 11.9268 8.86114 11.8068C8.79945 11.7442 8.75174 11.6692 8.72114 11.5868C8.68781 11.5068 8.66781 11.4202 8.66781 11.3335C8.66781 11.2468 8.68781 11.1602 8.72114 11.0802C8.75447 10.9935 8.80114 10.9202 8.86114 10.8602C9.01447 10.7068 9.24781 10.6335 9.46114 10.6802C9.50781 10.6868 9.54781 10.7002 9.58781 10.7202C9.62781 10.7335 9.66781 10.7535 9.70781 10.7802C9.74114 10.8002 9.77447 10.8335 9.80781 10.8602C9.92781 10.9868 10.0011 11.1602 10.0011 11.3335C10.0011 11.5068 9.92781 11.6802 9.80781 11.8068C9.68114 11.9268 9.50781 12.0002 9.33447 12.0002ZM12.6678 6.56016H1.33447C1.06114 6.56016 0.834473 6.3335 0.834473 6.06016C0.834473 5.78683 1.06114 5.56016 1.33447 5.56016H12.6678C12.9411 5.56016 13.1678 5.78683 13.1678 6.06016C13.1678 6.3335 12.9411 6.56016 12.6678 6.56016Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.66667 15.1668H4.33333C1.9 15.1668 0.5 13.7668 0.5 11.3335V5.66683C0.5 3.2335 1.9 1.8335 4.33333 1.8335H9.66667C12.1 1.8335 13.5 3.2335 13.5 5.66683V11.3335C13.5 13.7668 12.1 15.1668 9.66667 15.1668ZM4.33333 2.8335C2.42667 2.8335 1.5 3.76016 1.5 5.66683V11.3335C1.5 13.2402 2.42667 14.1668 4.33333 14.1668H9.66667C11.5733 14.1668 12.5 13.2402 12.5 11.3335V5.66683C12.5 3.76016 11.5733 2.8335 9.66667 2.8335H4.33333Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>{"Jan 20, 2025"}</span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2512 8.6658C12.4108 7.03884 12.2336 4.80982 10.6497 3.35784C9.92602 2.69445 9.00345 2.28145 8.00686 2.16612C8.00067 2.15836 7.99415 2.15087 7.98734 2.14366C7.12036 1.24308 5.8748 0.726562 4.57003 0.726562C2.08709 0.726562 0 2.57655 0 4.94531C0 5.77582 0.257977 6.57197 0.748031 7.25955L0.0634453 9.40891C0.0423969 9.47497 0.0413532 9.54579 0.0604455 9.61244C0.0795378 9.67909 0.117913 9.73861 0.170746 9.78351C0.223578 9.82841 0.288507 9.85668 0.357367 9.86477C0.426226 9.87286 0.495941 9.86041 0.557742 9.82898L2.63963 8.77038C3.06717 8.95448 3.52055 9.07528 3.99005 9.13024C4.89572 10.0826 6.14801 10.5703 7.42922 10.5703C8.09522 10.5703 8.7588 10.4346 9.35953 10.1766L11.4415 11.2353C11.4908 11.2604 11.5454 11.2734 11.6008 11.2734C11.838 11.2734 12.0081 11.0422 11.9358 10.8152L11.2512 8.6658ZM2.78152 8.06299C2.73294 8.03992 2.67972 8.0283 2.62595 8.02903C2.57218 8.02976 2.5193 8.04281 2.47137 8.06719L0.988547 8.82117L1.47277 7.30087C1.49013 7.24636 1.49393 7.18843 1.48383 7.13211C1.47373 7.0758 1.45004 7.0228 1.4148 6.97772C0.949195 6.3817 0.703078 5.67893 0.703078 4.94531C0.703078 3.0068 2.43778 1.42969 4.57003 1.42969C5.42869 1.42969 6.25531 1.68982 6.92583 2.15827C4.66767 2.38533 2.85919 4.14909 2.85919 6.35156C2.85919 7.03659 3.03478 7.69608 3.36584 8.28694C3.1656 8.2274 2.97025 8.15253 2.78152 8.06299ZM9.52788 9.47341C9.47995 9.44904 9.42706 9.43599 9.37329 9.43527C9.31952 9.43455 9.26631 9.44617 9.21773 9.46924C8.66965 9.72959 8.0512 9.86719 7.42922 9.86719C5.29697 9.86719 3.56227 8.29008 3.56227 6.35156C3.56227 4.41305 5.29697 2.83594 7.42922 2.83594C9.56147 2.83594 11.2962 4.41305 11.2962 6.35156C11.2962 7.08518 11.0501 7.78795 10.5844 8.38395C10.5492 8.42903 10.5255 8.48203 10.5154 8.53834C10.5053 8.59466 10.5091 8.65259 10.5265 8.7071L11.0107 10.2274L9.52788 9.47341Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M6 6.70312C6.19416 6.70312 6.35156 6.54573 6.35156 6.35156C6.35156 6.1574 6.19416 6 6 6C5.80584 6 5.64844 6.1574 5.64844 6.35156C5.64844 6.54573 5.80584 6.70312 6 6.70312Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M7.40625 6.70312C7.60041 6.70312 7.75781 6.54573 7.75781 6.35156C7.75781 6.1574 7.60041 6 7.40625 6C7.21209 6 7.05469 6.1574 7.05469 6.35156C7.05469 6.54573 7.21209 6.70312 7.40625 6.70312Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M8.81152 6.70312C9.00569 6.70312 9.16309 6.54573 9.16309 6.35156C9.16309 6.1574 9.00569 6 8.81152 6C8.61736 6 8.45996 6.1574 8.45996 6.35156C8.45996 6.54573 8.61736 6.70312 8.81152 6.70312Z"
                          fill="#616C74"
                        ></path>
                      </svg>
                      <span>{"0 Comments"}</span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12ZM6 0.799987C8.86799 0.799987 11.2 3.13198 11.2 6C11.2 8.86802 8.86802 11.2 6 11.2C3.13198 11.2 0.799987 8.86802 0.799987 6C0.799987 3.13198 3.13201 0.799987 6 0.799987Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                        ></path>
                      </svg>
                      <span>{"1 Minute Read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="rs-postbox-details-title">
                {"Insights That Drive Business Smarter Forward"}
              </h3>
              <div className="rs-postbox-details-content">
                <p>
                  {
                    "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of\n                                    magna\n                                    aliqua. Ut enim ad minim the veniam, made of owl the quis nostrud exercitation\n                                    ullamco\n                                    laboris nisi ut aliquip dea dolor commodo consequat duis aute irure and dolor in\n                                    reprehenderit faucibus at malesuada sagittis placerat eros sed istincidunt."
                  }
                </p>
                <p>
                  {
                    "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In\n                                    hac\n                                    habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at\n                                    malesuada\n                                    sagittis placerat eros sed istincidunt.\n                                "
                  }
                </p>
                <div className="rs-postbox-details-thumb mb-30">
                  <SiteImage
                    src="/assets/images/blog/details/blog-details-01.webp"
                    alt="image"
                  />
                </div>
                <h3 className="rs-postbox-details-title">
                  {
                    "Smarter Thinking for Smarter Business Solutions\n                                "
                  }
                </h3>
                <p>
                  {
                    "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu\n                                    the In hac\n                                    habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at\n                                    malesuada\n                                    sagittis placerat eros sed istincidunt augue ac rutrum sed the is sodales augue\n                                    consequat.\n                                "
                  }
                </p>
                <div className="rs-postbox-quote">
                  <blockquote>
                    <p>
                      {
                        "“Pellentesque sollicitudin congue dolor non aliquam. Morbi\n                                            volutpat, nisi vel ultricies\n                                            urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu\n                                            metus.\n                                            Praesent\n                                            eleifend orci sit amet est vehicula”"
                      }
                    </p>
                    <div className="rs-postbox-quote-info">
                      <cite>{"Leslie Alexander"}</cite>
                      <div className="rs-postbox-quote-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 36 26"
                        >
                          <path d="M15.4287 0.142578V15.5713L10.2861 25.8564H2.57129L7.71387 15.5713H0V0.142578H15.4287ZM35.999 0.142578V15.5713L30.8564 25.8564H23.1416L28.2842 15.5713H20.5703V0.142578H35.999ZM21.5703 14.5713H29.9023L24.7598 24.8564H30.2383L34.999 15.335V1.14258H21.5703V14.5713ZM1 14.5713H9.33203L4.18945 24.8564H9.66797L14.4287 15.335V1.14258H1V14.5713Z"></path>
                        </svg>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <p>
                  {
                    "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of\n                                    magna\n                                    aliqua. Ut enim ad minim sand veniam, made of owl the quis nostrud exercitation\n                                    ullamco\n                                    laboris nisi ut aliquip ex ea dolor commodo consequat aute irure and dolor in\n                                    reprehenderit.\n                                "
                  }
                </p>
                <div className="rs-postbox-details-social">
                  <div className="rs-postbox-details-tags tagcloud">
                    <span>{"Tags:"}</span>
                    <SiteLink href="/contact-us.html">{"Business"}</SiteLink>
                    <SiteLink href="/services.html">{"Consulting"}</SiteLink>
                    <SiteLink href="/services.html">{"Services"}</SiteLink>
                  </div>
                  <div className="rs-postbox-social">
                    <span>{"Social:"}</span>
                    <div className="rs-theme-social theme-social has-transparent">
                      <SiteLink href="/contact-us.html">
                        <i className="ri-facebook-fill"></i>
                      </SiteLink>
                      <SiteLink href="/contact-us.html">
                        <i className="ri-twitter-x-fill"></i>
                      </SiteLink>
                      <SiteLink href="/contact-us.html">
                        <i className="ri-linkedin-fill"></i>
                      </SiteLink>
                      <SiteLink href="/contact-us.html">
                        <i className="ri-youtube-fill"></i>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className="rs-postbox-comment-form">
                  <div className="rs-postbox-comments-title mt-35 mb-25">
                    <h3 className="rs-postbox-details-title">
                      {"Leave a Comment"}
                    </h3>
                  </div>
                  <EmailForm>
                    <div className="row g-4">
                      <div className="col-xl-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your Name"
                              aria-label="Your Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              aria-label="Your Email"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Write Message"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="rs-postbox-comment-btn">
                          <button type="submit" className="rs-btn">
                            {
                              "\n                                                        Post Comment\n                                                    "
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </EmailForm>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="rs-sidebar-wrapper rs-sidebar-sticky">
              <div className="sidebar-widget mb-30">
                <h5 className="sidebar-widget-title">{"Search"}</h5>
                <div className="sidebar-search">
                  <EmailForm>
                    <div className="sidebar-search-input">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                      />
                      <button type="submit">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="sidebar-widget widget-categories-two mb-30">
                <h5 className="sidebar-widget-title">{"Categories"}</h5>
                <div className="sidebar-widget-content">
                  <div className="list">
                    <ul>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Business\n                                                    "
                          }
                          <span>{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Corporate\n                                                    "
                          }
                          <span>{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Consulting\n                                                    "
                          }
                          <span>{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    AI Technology\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Oil & Gas Energy\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    IT Solutions\n                                                    "
                          }
                          <span>{"(6)"}</span>
                        </SiteLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget mb-30">
                <h5 className="sidebar-widget-title">{"Recent Posts"}</h5>
                <div className="sidebar-widget-content">
                  <div className="sidebar-blog-item-wrapper">
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
                            {
                              " Insights That Drive Business Smarter\n                                                        Forward"
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
                            {
                              "\n                                                        From the Minds of Business Growth Strategists "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
                            {
                              "\n                                                        Smarter Thinking for Smarter Business Solutions "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="sidebar-widget-title">{"Popular Tags"}</h5>
                <div className="sidebar-widget-content tagcloud">
                  <SiteLink href="/contact-us.html">{"Technology"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Business"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Video"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Agency"}</SiteLink>
                  <SiteLink href="/services.html">{"Consulting"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Financial"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Corporate"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Marketing"}</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
