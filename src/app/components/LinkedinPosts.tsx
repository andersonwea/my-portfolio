import { Image, Link } from '@nextui-org/react'
import { Heading } from './Heading'

const posts = [
  {
    image:
      'https://media.licdn.com/dms/image/D4D22AQHr4PP7FE7smg/feedshare-shrink_480/0/1701267534009?e=1704931200&v=beta&t=dBPL-Gqvk8FZBSMxEauty7W53iFW4EmI8OkkXFjygik',
    link: 'https://www.linkedin.com/posts/anderson-silva-988197151_crypto-projeto-web3-activity-7135633227922161665-c2PX?utm_source=share&utm_medium=member_desktop',
  },
  {
    image:
      'https://media.licdn.com/dms/image/D4D22AQHpSTTdr1tx1g/feedshare-shrink_480/0/1698158131933?e=1704931200&v=beta&t=ljPfMNn3-pVgsAcS8NO9TQD_zBRKf43w_BGvXo6qZnI',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7122591450189459456?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7122591450189459456%29',
  },
  {
    image:
      'https://media.licdn.com/dms/image/D4D05AQEjw9s03h6Pag/videocover-low/0/1697487548666?e=1702933200&v=beta&t=2_mdvxSSBOzjPjX4yWbDNZ44vRbUFl26AefLlJaEut8',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7120045798746169344?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7120045798746169344%29',
  },
  {
    image:
      'https://media.licdn.com/dms/image/D4D05AQFqwYbC5h5ftA/videocover-low/0/1696287266254?e=1702933200&v=beta&t=L_vdXNgx5d7eHnTpfUmgsInAyr-Jh0e9QiX0C71XFdU',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7114972372847198213?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7114972372847198213%29',
  },
  {
    image:
      'https://media.licdn.com/dms/image/D4D22AQGSt-5Njxi_0w/feedshare-shrink_480/0/1691253640939?e=1704931200&v=beta&t=IDfOxz3k-8P4mLUn9pQu0zFwOKDQZrBOGv1xhiur73k',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7093631916976873472?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7093631916976873472%29',
  },
  {
    image:
      'https://media.licdn.com/dms/image/D4D22AQF2uh026d2TMA/feedshare-shrink_480/0/1694534457161?e=1704931200&v=beta&t=jx4VbuLTFjqECSQY-t2hGFUoEMYhfqKcUmEyESgJX6E',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7107392656648904705?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7107392656648904705%29',
  },
]

export function LinkedinPosts() {
  return (
    <div className="lg:justify-self-end max-lg:mt-5">
      <Heading as="h2">Veja no linkedin</Heading>
      <ul className="flex flex-wrap gap-2 max-w-xs mt-5">
        {posts.map((post) => (
          <Link key={post.link} href={post.link} isExternal>
            <Image
              width={100}
              height={70}
              src={post.image}
              alt=""
              radius="sm"
              className="w-[100px] h-[70px] object-cover object-center"
            />
          </Link>
        ))}
      </ul>
    </div>
  )
}
