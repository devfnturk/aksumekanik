'use client';
import useAosInit from '@/hooks/useAosInit';
import { postMail } from '@/services/postMethods';
import { useFormik } from 'formik';
import { Mail, MessageCircleMore, Phone, SquarePen, User } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(t('Iletisim.IletisimFormu.IsimError')),
            email: Yup.string().email(t('Iletisim.IletisimFormu.EpostaGecersiz')).required(t('Iletisim.IletisimFormu.EpostaError')),
            phoneNumber: Yup.string()
                .matches(/^05\d{9}$/, t('Iletisim.IletisimFormu.TelefonGecersiz'))
                .required(t('Iletisim.IletisimFormu.TelefonError')),
            subject: Yup.string(),
            message: Yup.string().min(10, t('Iletisim.IletisimFormu.MesajError')),
            // kvkk: Yup.boolean().oneOf([true], 'KVKK metnini onaylamalısınız'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true);
                await postMail(values);
                toast.success(t('Iletisim.IletisimFormu.BasariliMesaji'));
                resetForm();
            } catch (error) {
                toast.error(t('Iletisim.IletisimFormu.HataMesaji'));
                console.log(`${t('Iletisim.IletisimFormu.HataMesaji')}: `, error)
            } finally {
                setLoading(false);
            }
        },
    });

    useAosInit();

    return (
        <>
            {/* Toast mesajı */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            <div className="bg-white p-6 shadow-md rounded-md" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="-800">
                <h2 className="text-2xl font-bold mb-4">{t('Iletisim.IletisimFormu.BizeUlasin')}</h2>
                {/* İletişim Form */}
                {!loading ? (
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="relative">
                                    <User color='var(--aksu-green)' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className="form-input w-full border border-gray-300 p-2 pl-10 rounded"
                                        placeholder={t('Iletisim.IletisimFormu.IsimSoyisim')}
                                    />
                                </div>
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <Mail color='var(--aksu-green)' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className="form-input w-full border border-gray-300 p-2 pl-10 rounded"
                                        placeholder={t('Iletisim.IletisimFormu.Eposta')}
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <Phone color='var(--aksu-green)' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        maxLength={11}
                                        onChange={(e) => {
                                            const onlyNumbers = e.target.value.replace(/\D/g, '');
                                            formik.setFieldValue('phoneNumber', onlyNumbers);
                                        }}
                                        value={formik.values.phoneNumber}
                                        className="form-input w-full border border-gray-300 p-2 pl-10 rounded"
                                        placeholder={t('Iletisim.IletisimFormu.Telefon')}
                                    />
                                </div>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <SquarePen color='var(--aksu-green)' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                                    <input
                                        type="text"
                                        name="subject"
                                        onChange={formik.handleChange}
                                        value={formik.values.subject}
                                        className="form-input w-full border border-gray-300 p-2 pl-10 rounded"
                                        placeholder={t('Iletisim.IletisimFormu.Konu')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <MessageCircleMore color='var(--aksu-green)' className='absolute left-3 top-5 transform -translate-y-1/2' />
                            <textarea
                                name="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                className="form-textarea w-full border border-gray-300 p-2 pl-10 rounded"
                                rows={6}
                                placeholder={t('Iletisim.IletisimFormu.Mesaj')}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                            )}
                        </div>

                        {/* <div className="mt-4">
                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="kvkk"
                                onChange={formik.handleChange}
                                checked={formik.values.kvkk}
                                className="mt-1"
                            />
                            <span>
                                <span className="underline font-bold">KVKK okudum,</span>
                                <span> kabul ediyorum.</span>
                            </span>
                        </label>
                        {formik.touched.kvkk && formik.errors.kvkk && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.kvkk}</div>
                        )}
                    </div> */}

                        <div className="mt-4 text-end">
                            <button
                                type="submit"
                                className="bg-[var(--aksu-green)] hover:opacity-90 hover:cursor-pointer text-white px-6 py-2 rounded"
                            >
                                {t('Iletisim.IletisimFormu.MailGonder')}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className='flex justify-center items-center  md:min-h-96'>
                        <Image src='/images/loadingAnimation.gif' alt='Yükleniyor...' width={70} height={70} />
                    </div>
                )}
            </div>
        </>
    );
}
