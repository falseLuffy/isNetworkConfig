import IPV42Decimal from 'ipv42decimal'

export function isNetworkConfig (ip, mask, gw) {
  if (ip === gw || ip === mask || mask === gw) {
    return false // 3个地址不能相同
  }
  const IPNumber = IPV42Decimal(ip)
  const maskNumber = IPV42Decimal(mask)
  const gatwayNumber = IPV42Decimal(gw)

  return (IPNumber & maskNumber) === (maskNumber & gatwayNumber)
}
