module Jekyll
  class RuDate < Liquid::Block

    def render(context)
      data = super
      m = data.split('.')
      mc = m[1]
      mw = ''
      case mc
      when '01'
        mw = 'января'
      when '02'
        mw = 'февраля'
      when '03'
        mw = 'марта'
      when '04'
        mw = 'апреля'
      when '05'
        mw = 'мая'
      when '06'
        mw = 'июня'
      when '07'
        mw = 'июля'
      when '08'
        mw = 'августа'
      when '09'
        mw = 'сентября'
      when '10'
        mw = 'октября'
      when '11'
        mw = 'ноября'
      when '12'
        mw = 'декабря'
      else
        mw = m[1]      
      end

      output = "#{m[0]} #{mw} #{m[2]}"
      return output
    end
  end
end

Liquid::Template.register_tag('ru_date', Jekyll::RuDate)