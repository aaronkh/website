import React from 'react'
import { FiLinkedin, FiGithub, FiMail, FiPhoneCall } from 'react-icons/fi'
import { withThemeContext } from '../../state/ThemeContext'
import Toolbar from '../common/Toolbar'
import Link from '../common/Link'
import ScrollTop from '../common/ScrollTop'
import './Resume.css'

const Resume = props =>
    <div className="resume" style={{
        width: '100%',
        background: props.themeContext.background
    }}>
        <ScrollTop />
        <div id="container" style={{
            background: props.themeContext.background,
            color: props.themeContext.text
        }}>
            <Toolbar desktopWidth={1024} />
            <div class="head">
                <div id="name">Aaron Huang </div>
                <div id="subtitle">Computer Science Student @ UC Berkeley</div>
                <div class="contact">
                    <li id="phone">
                        <Link href="tel:4158126317">
                            <FiPhoneCall />
                        (415) 812-6317
                    </Link>
                    </li>
                    <div class="separator-inline" style={{ background: props.themeContext.text }} />
                    <li id="email">
                        <Link href="mailto:aahuang@berkeley.edu">
                            <FiMail />
                    aahuang@berkeley.edu
                    </Link>
                    </li>
                    <div class="separator-inline" style={{ background: props.themeContext.text }} />
                    <li id="linkedin">
                        <Link href="https://www.linkedin.com/in/aaronkh">
                            <FiLinkedin />
                    aaronkh
                    </Link>
                    </li>
                    <div class="separator-inline" style={{ background: props.themeContext.text }} />
                    <li id="github">
                        <Link href="https://www.github.com/aaronkh">
                            <FiGithub />
                    aaronkh
                    </Link>
                    </li>
                </div>
            </div>
            <div class="section">
                <div class="section-head">
                    <div class="section-title">Education</div>
                    <div class="section-separator" style={{ background: props.themeContext.text }}></div>
                </div>
                <div class="section-inner">
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title"> <b>University of California, Berkeley</b></div>
                                <div class="subtitle">Bachelors of Arts in Computer Science (GPA 3.57)</div>
                            </div>
                            <div class="right">
                                <div class="title">Aug 2018 - May 2022 (expected)</div>
                            </div>
                        </div>
                    </div>
                    <div class="description">
                        <li>Clubs/Activities: Extended Reality at Berkeley, Data Science Society</li>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-head">
                    <div class="section-title">Skills</div>
                    <div class="section-separator" style={{ background: props.themeContext.text }}></div>
                </div>
                <div class="item-head">
                    <div class="technologies">Node.js, React + React Native, Express, Android Studio, Pandas, Git</div>
                    <div class="languages">Python, HTML5/CSS/JS, Java, SQL, Kotlin</div>
                </div>
            </div>
            <div class="section">
                <div class="section-head">
                    <div class="section-title">Experience</div>
                    <div class="section-separator" style={{ background: props.themeContext.text }}></div>
                </div>
                <div class="section-inner">
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Academic Intern</div>
                                <div class="subtitle">UC Berkeley (Data 100)</div>
                            </div>
                            <div class="right">
                                <div class="title">Jan 2020 - current</div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Helped run weekly labs to teach students data science fundamentals (linear/logistic regression, bias-variance tradeoff, gradient descent, random forests)</li>
                            <li>Helped debug student code written with various data science libraries (Pandas, NumPy, SciPy, PyTorch)</li>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Software Engineer Intern </div>
                                <div class="subtitle">Soracom Global Inc. </div>
                            </div>
                            <div class="right">
                                <div class="title">Jun 2019 - Jan 2020</div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Added remote management capabilities onto a Xiaomi M365 electric scooter to demonstrate Soracom's cellular services</li>
                            <li>Created an Android app with React Native and Stripe API for accepting payments and unlocking the scooter</li>
                            <li>Published articles and videos about the development process on Hackernoon with thousands of views</li>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Mobile Developer (Android)</div>
                                <div class="subtitle">Project Loaf </div>
                            </div>
                            <div class="right">
                                <div class="title">Jun 2017 - Aug 2017 </div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Designed and developed an Android app for storekeepers to visualize and optimize foot traffic in stores</li>
                            <li>Developed a way to track customers' location indoors using WiFi and Bluetooth probe requests with Raspberry Pis</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-head">
                    <div class="section-title">Projects</div>
                    <div class="section-separator" style={{ background: props.themeContext.text }}></div>
                </div>
                <div class="section-inner">
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Augmented Reality for Visually Impaired People</div>
                                <div class="subtitle stack">Microsoft Hololens, Unity (C#), Google Cloud Vision API</div>
                            </div>
                            <div class="right">
                                <div class="title">Sep 2019 - current</div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Added gesture support to a Hololens application aimed at helping visually impaired people navigate their surroundings</li>
                            <li>Used Google Cloud Vision APIs to parse and read text captured by the Hololens</li>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Bobafetch </div>
                                <div class="subtitle stack">React Native, Stripe API, Python, Microsoft Azure, Arduino, Raspberry Pi </div>
                            </div>
                            <div class="right">
                                <div class="title">Nov 2019</div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Won "Best Use of Hardware" and "3rd Place Overall" at CalHacks 6.0</li>
                            <li>Created an automated boba barista machine and delivery robot powered by an Arduino and a Raspberry Pi</li>
                            <li>Built a customer-facing React Native tablet app for placing orders and buying bubble milk tea </li>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">PictRNNary </div>
                                <div class="subtitle stack">Bootstrap + JQuery, Node.js, Tensorflow, Keras, Microsoft Azure</div>
                            </div>
                            <div class="right">
                                <div class="title">Nov 2018 </div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Awarded Best Use of Microsoft and Regional Microsoft Imagine Cup Semifinalist awards at CalHacks 5.0</li>
                            <li>Used HTML and JavaScript to create a web interface for an AI-powered Pictionary game with speech and speaker recognition.</li>
                            <li>Hosted a recurrent neural network on Microsoft Azure to generate SVG drawings</li>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-head">
                            <div class="left">
                                <div class="title">Blindsight </div>
                                <div class="subtitle stack">Android, Node.js, Python (OpenCV), Tensorflow, Raspberry Pi </div>
                            </div>
                            <div class="right">
                                <div class="title">Sep 2018 </div>
                            </div>
                        </div>
                        <div class="description">
                            <li>Won Visa API, HERE Mobility SDK, and semi-finalist awards at TechCrunch Disrupt SF Hackathon (2018)</li>
                            <li>Created a smartwatch device to assist the visually impaired with machine learning and haptic feedback</li>
                            <li>Trained and used a Tensorflow model to read text in images and perform object recognition</li>
                            <li>Built a voice interface for Android using speech recognition and NLP APIs</li>
                            <li>Featured on Hackster.io, Makezine, PYMNTS.com, and CBS</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default withThemeContext(Resume)