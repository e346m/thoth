for i in `seq $@`; do hugo new "$i.md"; done

for i in `seq $@`; do
  sed -i -e 's/---/+++/g' "content/$i.md";
  sed -i -e '/^title:.*$/d' content/$i.md;
  sed -i -e 's/date:/date =/g' "content/$i.md";
  sed -i -e 's/draft:/draft =/g' "content/$i.md";
  rm "content/$i.md-e"
done
