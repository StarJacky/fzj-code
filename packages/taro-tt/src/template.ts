import { RecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends RecursiveTemplate {
  supportXS = true
  Adapter = {
    if: 'tt:if',
    else: 'tt:else',
    elseif: 'tt:elif',
    for: 'tt:for',
    forItem: 'tt:for-item',
    forIndex: 'tt:for-index',
    key: 'tt:key',
    xs: 'sjs',
    type: 'tt'
  }

  replacePropName (name: string, value: string) {
    if (value === 'eh') {
      const nameLowerCase = name.toLowerCase()
      if (nameLowerCase === 'bindlongtap') return 'bindlongpress'
      return nameLowerCase
    }
    return name
  }

  buildXsTemplate (filePath = './utils') {
    return `<sjs module="xs" src="${filePath}.sjs" />`
  }
}
