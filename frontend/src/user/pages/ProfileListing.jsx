import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import generalStyles from '../styles/UserGeneral.module.css'
import styles from "../styles/ProfileListing.module.css";

const ProfileListing = () => {
    return (
        <>
            <PageHeader
                title="Unmarried Grooms"
                backgroundImage="/images/user/page-banner/listing.webp"
            />
            <div className={`${styles.profile_listing} ${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className={`${styles.headPara}`}>
                                This is only reference list of all registered profiles. You may please use{' '}
                                <a href="https://www.anandmaratha.com/search.php">Simple Search</a> option to find matching profiles by
                                giving age, height, education, occupation & native place. If you want contact details of matching
                                profiles, please submit matching registration nos. through{' '}
                                <a href="https://www.anandmaratha.com/response.php">RESPONSE</a> option along with your registration no.
                                & registered email id.
                            </p>

                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <th style={{ width: '104px', textAlign: 'center' }}>Reg. No.</th>
                                        <th style={{ width: '94px' }}>Reg. Dt</th>
                                        <th style={{ width: '72px' }}>Height</th>
                                        <th style={{ width: '102px' }}>Birth Dt</th>
                                        <th style={{ width: '150px' }}>Education</th>
                                        <th style={{ width: '100px' }}>Residence</th>
                                        <th style={{ width: '150px' }}>Occupation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profiles.map((profile, index) => (
                                        <tr key={index} className={index % 2 !== 0 ? styles.even_row : ''}>
                                            <td style={{ textAlign: 'center' }}>
                                                <a className={`${styles.table_img}`} href={profile.url} target="_blank" rel="noreferrer">
                                                    <img src={profile.img} alt={profile.id} loading='lazy' />
                                                    {profile.id}
                                                </a>
                                            </td>
                                            <td>{profile.regDate}</td>
                                            <td>{profile.height}</td>
                                            <td>{profile.birthDate}</td>
                                            <td>{profile.education}</td>
                                            <td>{profile.residence}</td>
                                            <td>{profile.occupation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="row justify-content-center mt-4">
                                <div className={`${generalStyles.pagination} col text-center`}>
                                    <b>1</b>&nbsp;
                                    <Link to="/maratha-grooms/2">2</Link>&nbsp;
                                    <Link to="/maratha-grooms/3">3</Link>&nbsp;
                                    <Link to="/maratha-grooms/4">4</Link>&nbsp;
                                    <Link to="/maratha-grooms/5">5</Link>&nbsp;
                                    <Link to="/maratha-grooms/6">[Next]</Link>&nbsp;
                                    <Link to="/maratha-grooms/194">[Last Page]</Link>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center text-end">
                                    <input
                                        type="text"
                                        id="go"
                                        name="go"
                                        style={{ width: '55px', color: '#000', height: '100%' }}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (val && !isNaN(val)) window.location.href = `/maratha-grooms/${val}`;
                                        }}
                                    />
                                    <button type="submit" className={`${generalStyles.page_btn} py-1 px-3 ms-2`}>GO</button>
                                    <span className="ms-3" style={{ color: '#000' }}>Page 1 of 194</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileListing;

const profiles = [
    {
        id: 'MB107002',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.10',
        birthDate: '26/10/1992',
        education: 'BCS (COMPUTER SCIENCE)',
        residence: 'PUNE',
        occupation: 'SERVICE PUNE/4.5 PA',
        url: '/maratha-groom/190462'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
    {
        id: 'MB107001',
        img: '/images/user/home/profiles/user.jpeg',
        regDate: '06/07/25',
        height: '5.09',
        birthDate: '28/10/1998',
        education: 'BE MECHANICAL',
        residence: 'PUNE',
        occupation: 'SERVICE (IT) PUNE/800000 PA',
        url: '/maratha-groom/190461'
    },
];
