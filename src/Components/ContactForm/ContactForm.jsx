import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import FormTextarea from '../FormTextarea/FormTextarea';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        howDidYouHear: '',
        message: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <section className={styles.contactSection}>
            <SectionHeader
                title="Let's Connect"
                subtitle="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
                showIcon={true}
            />
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                    <FormInput label="First Name" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} required />
                    <FormInput label="Last Name" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} required />
                    <FormInput label="Email" type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                    <FormInput label="Phone" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
                    <FormSelect label="Inquiry Type" name="inquiryType" value={formData.inquiryType} onChange={handleChange} options={[
                        { value: '', label: 'Select Inquiry Type' },
                        { value: 'buy', label: 'Buying' },
                        { value: 'sell', label: 'Selling' },
                    ]} />
                    <FormSelect label="How Did You Hear About Us?" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} options={[
                        { value: '', label: 'Select' },
                        { value: 'google', label: 'Google' },
                        { value: 'friend', label: 'Friend' },
                    ]} />
                    <div className={styles.fullWidth}>
                        <FormTextarea label="Message" name="message" placeholder="Enter your Message here." value={formData.message} onChange={handleChange} required />
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <CheckBox label="I agree with Terms of Use and Privacy Policy" name="agree" checked={formData.agree} onChange={handleChange} required />
                    <Button type="submit" variant="primary" size="small">Send Your Message</Button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
